import React, { useState, useEffect } from 'react';
import { ChevronLeft, Clock, Calendar, MapPin, User, Check, X } from 'lucide-react';
import { meetingService } from '../services/meetingService';
import { config } from '../config/environment.js';

const MeetingScheduler = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTimezone] = useState('Asia/Calcutta (GMT+5:30)'); // Fixed timezone
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    revenue: '',
    termsAccepted: false
  });

  // Guest email functionality
  const [guestEmails, setGuestEmails] = useState([]);
  const [newGuestEmail, setNewGuestEmail] = useState('');
  const [showAddGuest, setShowAddGuest] = useState(false);

  // API states (following ContactUs pattern)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [meetingResult, setMeetingResult] = useState(null);

  // Environment configuration is now imported from config

  // Generate time slots from 9:00 AM to 6:00 PM in 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9:00 AM
    const endHour = 18; // 6:00 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);
        
        // Format in 12-hour format
        const timeString = time.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        
        slots.push(timeString);
      }
    }
    
    return slots;
  };

  // Fixed time slots for Asia/Calcutta timezone
  const [availableTimeSlots] = useState(generateTimeSlots());

  // Test backend connection on component mount
  useEffect(() => {
    const testBackend = async () => {
      const isConnected = await meetingService.testConnection();
      console.log('Backend connection status:', isConnected);
    };
    testBackend();
  }, []);

  // Time slots are now fixed and generated locally - no API call needed

  // Helper functions for date handling
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Function to calculate end time (30 minutes after selected time)
  const getEndTime = (startTime) => {
    if (!startTime) return '';
    
    // Parse the start time (e.g., "1:30 PM")
    const [time, period] = startTime.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    // Convert to 24-hour format for calculation
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) {
      hour24 += 12;
    } else if (period === 'AM' && hours === 12) {
      hour24 = 0;
    }
    
    // Add 30 minutes
    let newMinutes = minutes + 30;
    let newHour24 = hour24;
    
    if (newMinutes >= 60) {
      newMinutes -= 60;
      newHour24 += 1;
    }
    
    // Convert back to 12-hour format
    let newHour = newHour24;
    let newPeriod = 'AM';
    
    if (newHour24 >= 12) {
      newPeriod = 'PM';
      if (newHour24 > 12) {
        newHour = newHour24 - 12;
      }
    }
    
    if (newHour === 0) {
      newHour = 12;
    }
    
    return `${newHour}:${newMinutes.toString().padStart(2, '0')} ${newPeriod}`;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateSelected = (date) => {
    if (!selectedDate || !date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDate() === 26; // Disable past dates and 26th
  };

  const handleDateSelect = (date) => {
    if (date && !isDateDisabled(date)) {
    setSelectedDate(date);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const revenueOptions = [
    '0-200,000',
    '200,000-500,000',
    '500,000 - 1M',
    '1M - 5M',
    '5M+'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Guest email functions
  const handleAddGuest = () => {
    if (newGuestEmail && newGuestEmail.includes('@') && !guestEmails.includes(newGuestEmail)) {
      setGuestEmails(prev => {
        const updated = [...prev, newGuestEmail];
        console.log('Added guest email:', newGuestEmail);
        console.log('Updated guest emails list:', updated);
        return updated;
      });
      setNewGuestEmail('');
      setShowAddGuest(false);
    } else {
      console.log('Guest email validation failed:', {
        email: newGuestEmail,
        hasAt: newGuestEmail?.includes('@'),
        alreadyExists: guestEmails.includes(newGuestEmail)
      });
    }
  };

  const handleRemoveGuest = (emailToRemove) => {
    setGuestEmails(prev => {
      const updated = prev.filter(email => email !== emailToRemove);
      console.log('Removed guest email:', emailToRemove);
      console.log('Updated guest emails list:', updated);
      return updated;
    });
  };

  const handleCancelAddGuest = () => {
    setNewGuestEmail('');
    setShowAddGuest(false);
  };

  const handleNext = () => {
    // Validation for each step
    if (currentStep === 1 && !selectedDate) {
      alert('Please select a date');
      return;
    }
    if (currentStep === 2 && !selectedTime) {
      alert('Please select a time slot');
      return;
    }
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSchedule = async () => {
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);
    setErrorMessage('');

    try {
      const meetingData = {
        selectedDate: selectedDate?.toISOString().split('T')[0],
        selectedTime: selectedTime,
        timezone: 'Asia/Calcutta',
        userDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          companyName: formData.companyName,
          revenue: formData.revenue,
          termsAccepted: formData.termsAccepted
        },
        guestEmails: guestEmails, // Guest emails at root level as per API spec
        organizerEmail: config.ORGANIZER_EMAIL
      };

      console.log('Scheduling meeting with data:', meetingData);
      console.log('Guest emails being sent:', guestEmails);
      console.log('Number of guest emails:', guestEmails.length);
      
      // Real API call to your backend
      const result = await meetingService.scheduleMeeting(meetingData);
      console.log('Meeting scheduled successfully:', result);
      
      // Check if the API call was successful
      if (result.success) {
      setIsSubmitting(false);
      setShowSuccess(true);
        setMeetingResult(result); // Store the meeting result
        setCurrentStep(5);
        
        // Hide success message after 5 seconds (following ContactUs pattern)
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      } else {
        throw new Error(result.message || 'Failed to schedule meeting');
      }
      
    } catch (error) {
      console.error('Failed to schedule meeting:', error);
      setIsSubmitting(false);
      setErrorMessage('Failed to schedule meeting. Please try again.');
      setShowError(true);
      
      // Hide error message after 5 seconds (following ContactUs pattern)
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  const renderStep1 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Panel - Discovery Call Details */}
      <div className="space-y-6">
        
        <div>
          <h2 className="text-3xl font-bold text-[#073349] mb-6">Discovery Call</h2>
          
          <div className="space-y-4">
            <div className="flex items-center text-[#073349]">
              <Clock className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>30 Mins</span>
      </div>

            <div className="flex items-center text-[#073349]">
              <Calendar className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>Select a date and time</span>
          </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#073349] mb-4">
              Opening New Revenue Streams Starts Here!!!
            </h3>
            <p className="text-[#073349] leading-relaxed">
              We've helped thousands of brands just like you double, triple, or even quadruple their sales on Amazon and other marketplaces like TikTok shop, Target+, Walmart and more.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Date & Time Selection */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-[#073349] mb-6">Select Date & Time</h3>
        
        {/* Timezone Display */}
        <div className="mb-6">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <MapPin className="w-4 h-4 mr-2 text-[#A28750]" />
            <span className="text-[#073349]">Timezone: {selectedTimezone}</span>
        </div>
        </div>

        {/* Calendar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-4 h-4 text-[#073349]" />
            </button>
            <h4 className="text-lg font-semibold text-[#073349]">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h4>
            <button 
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-4 h-4 text-[#073349] rotate-180" />
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-[#073349] py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentMonth).map((date, index) => {
              if (!date) {
                return <div key={index} className="p-2"></div>;
              }
              
              const isSelected = isDateSelected(date);
              const isDisabled = isDateDisabled(date);
              const isToday = date.toDateString() === new Date().toDateString();
              
              return (
            <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  disabled={isDisabled}
                  className={`p-2 text-sm rounded relative ${
                    isSelected
                      ? 'bg-[#A28750] text-white'
                      : isDisabled
                      ? 'text-gray-400 cursor-not-allowed'
                      : isToday
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300 font-semibold hover:bg-blue-200'
                      : 'text-[#073349] hover:bg-gray-100'
                  }`}
                >
                  {date.getDate()}
                  {date.getDate() === 26 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timezone is fixed to Asia/Calcutta */}

        {/* Continue Button */}
        <div className="pt-4">
          <button
            onClick={handleNext}
            className="w-full px-6 py-3 bg-[#A28750] text-white rounded-lg hover:bg-[#8a6f3f] transition-colors font-medium"
          >
            Continue to Time Selection
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Panel - Discovery Call Details */}
      <div className="space-y-6">
        <button 
          onClick={handleBack}
          className="flex items-center text-[#073349] hover:text-[#A28750] transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back
            </button>
        
        <div>
          <h2 className="text-3xl font-bold text-[#073349] mb-6">Discovery Call</h2>
          
          <div className="space-y-4">
            <div className="flex items-center text-[#073349]">
              <Clock className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>30 Mins</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <Calendar className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>{selectedTime} - {getEndTime(selectedTime)}, {formatDate(selectedDate)}</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <MapPin className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>Microsoft Teams Meeting Link</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <User className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>Anna ({selectedTimezone})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Time Selection */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-[#073349] mb-6">Select Time</h3>
        
        {/* Timezone and Working Hours Display */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <MapPin className="w-4 h-4 mr-2 text-[#A28750]" />
            <span className="text-[#073349]">Timezone: {selectedTimezone}</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Clock className="w-4 h-4 mr-2 text-[#A28750]" />
            <span className="text-[#073349]">Working Hours: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Time Slots Grid */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {availableTimeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 text-center rounded-lg border transition-colors font-medium ${
                  selectedTime === time
                    ? 'bg-[#A28750] text-white border-[#A28750]'
                    : 'bg-white text-[#073349] border-gray-300 hover:border-[#A28750] hover:bg-[#A28750]/5'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>


        {/* Continue Button */}
        <div className="pt-4">
            <button
            onClick={handleNext}
            className="w-full px-6 py-3 bg-[#A28750] text-white rounded-lg hover:bg-[#8a6f3f] transition-colors font-medium"
            >
            Continue to Details
            </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Panel - Discovery Call Details */}
      <div className="space-y-6">
            <button
          onClick={handleBack}
          className="flex items-center text-[#073349] hover:text-[#A28750] transition-colors"
            >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back
            </button>
        
        <div>
          <h2 className="text-3xl font-bold text-[#073349] mb-6">Discovery Call</h2>
          
          <div className="space-y-4">
            <div className="flex items-center text-[#073349]">
              <Clock className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>30 Mins</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <Calendar className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>{selectedTime} - {getEndTime(selectedTime)}, {formatDate(selectedDate)}</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <MapPin className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>Microsoft Teams Meeting Link</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <User className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>Anna ({selectedTimezone})</span>
            </div>
          </div>
        </div>
          </div>

      {/* Right Panel - Enter Details Form */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-[#073349] mb-6">Enter Details</h3>
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#073349] mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-[#073349] focus:outline-none focus:ring-2 focus:ring-[#A28750]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#073349] mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-[#073349] focus:outline-none focus:ring-2 focus:ring-[#A28750]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#073349] mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@example.com"
              required
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-[#073349] focus:outline-none focus:ring-2 focus:ring-[#A28750]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#073349] mb-2">Company/Brand Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company/Brand Name"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-[#073349] focus:outline-none focus:ring-2 focus:ring-[#A28750]"
              />
            </div>

          <div>
            <label className="block text-sm font-medium text-[#073349] mb-2">Last Year Revenue *</label>
            <div className="space-y-2">
              {revenueOptions.map((option) => (
                <label key={option} className="flex items-center">
              <input
                    type="radio"
                    name="revenue"
                    value={option}
                    checked={formData.revenue === option}
                onChange={handleInputChange}
                    className="mr-3 text-[#A28750] focus:ring-[#A28750]"
              />
                  <span className="text-[#073349]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mt-1 mr-3 text-[#A28750] focus:ring-[#A28750]"
            />
            <span className="text-sm text-[#073349]">
              I agree to{' '}
              <a href="#" className="text-[#A28750] hover:underline">
                terms & conditions
              </a>{' '}
              provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </span>
          </div>

          {/* Guest Email Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-[#073349]">
                Guest Emails ({guestEmails.length})
              </h4>
            </div>

            {/* Display existing guest emails */}
            {guestEmails.map((email, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
                <span className="text-sm text-[#073349]">{email}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveGuest(email)}
                  className="text-red-500 hover:text-red-700 text-lg font-bold"
                >
                  ×
                </button>
              </div>
            ))}

            {/* Add Guest Email Form */}
            {showAddGuest && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-medium text-[#073349] mb-2">Add Guest Email</h5>
                <input
                  type="email"
                  value={newGuestEmail}
                  onChange={(e) => setNewGuestEmail(e.target.value)}
                  placeholder="Enter guest email address"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-[#073349] focus:outline-none focus:ring-2 focus:ring-[#A28750] mb-3"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleAddGuest}
                    disabled={!newGuestEmail || !newGuestEmail.includes('@')}
                    className="px-4 py-2 bg-[#A28750] text-white rounded-lg hover:bg-[#8a6f3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Add Guest
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelAddGuest}
                    className="px-4 py-2 border border-gray-300 text-[#073349] rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Add Guest Button - Only show when not adding */}
            {!showAddGuest && (
              <button
                type="button"
                onClick={() => setShowAddGuest(true)}
                className="w-full px-4 py-2 border border-gray-300 text-[#073349] rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Add Guest
              </button>
            )}
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={handleNext}
              disabled={!formData.email || !formData.revenue || !formData.termsAccepted}
              className="w-full px-6 py-3 bg-[#A28750] text-white rounded-lg hover:bg-[#8a6f3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm & Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Panel - Discovery Call Details */}
      <div className="space-y-6">
        <button 
          onClick={handleBack}
          className="flex items-center text-[#073349] hover:text-[#A28750] transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        
        <div>
          <h2 className="text-3xl font-bold text-[#073349] mb-6">Discovery Call</h2>
          
          <div className="space-y-4">
            <div className="flex items-center text-[#073349]">
              <Clock className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>30 Mins</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <Calendar className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>{selectedTime} - {getEndTime(selectedTime)}, {formatDate(selectedDate)}</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <MapPin className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>Microsoft Teams Meeting Link</span>
            </div>
            
            <div className="flex items-center text-[#073349]">
              <User className="w-5 h-5 mr-3 text-[#A28750]" />
              <span>Anna ({selectedTimezone})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Confirm Details */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-[#073349] mb-6">Confirm Details</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#073349] mb-2">Company/Brand Name</label>
            <input
              type="text"
              value={formData.companyName || 'Sumit'}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-[#073349]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#073349] mb-2">Last Year Revenue</label>
            <input
              type="text"
              value={formData.revenue || '0-200,000'}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-[#073349]"
            />
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#073349] mb-2">Contact Information</h4>
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-[#073349] mb-1">Name:</label>
                <input
                  type="text"
                  value={`${formData.firstName} ${formData.lastName}`}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-[#073349] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-[#073349] mb-1">Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-[#073349] text-sm"
                />
              </div>
              {guestEmails.length > 0 && (
                <div>
                  <label className="block text-xs text-[#073349] mb-1">Guest Emails:</label>
                  <div className="space-y-1">
                    {guestEmails.map((email, index) => (
                      <div key={index} className="p-2 border border-gray-300 rounded bg-gray-50 text-[#073349] text-sm">
                        {email}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-sm text-[#073349]">Terms & conditions accepted</span>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-[#073349]">
              <strong>Microsoft Teams Meeting:</strong> A meeting link will be generated and sent to your email address once confirmed.
            </p>
          </div>

          {/* Error Message */}
          {showError && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {errorMessage}</span>
            </div>
          )}

          {/* Success Message */}
          {showSuccess && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Meeting scheduled successfully!</span>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 px-6 py-3 border border-gray-300 text-[#073349] rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSchedule}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#A28750] text-white rounded-lg hover:bg-[#8a6f3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Scheduling...' : 'Confirm & Schedule'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="min-h-screen bg-[#f5e9d6] text-[#073349] font-sans flex flex-col items-center justify-center px-4 py-16">
      {/* Success Content */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#073349] mb-4">Meeting Scheduled!</h2>
          <p className="text-lg text-[#073349] mb-6">
            {meetingResult?.message || "Your Discovery Call has been successfully scheduled. You'll receive a confirmation email with the Microsoft Teams meeting link shortly."}
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-[#073349] mb-4">Meeting Details</h3>
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="font-medium text-[#073349]">Date:</span>
              <span className="text-[#073349]">{selectedDate?.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#073349]">Time:</span>
              <span className="text-[#073349]">{selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#073349]">Duration:</span>
              <span className="text-[#073349]">30 Mins</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#073349]">Platform:</span>
              <span className="text-[#073349]">Microsoft Teams</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentStep(1);
            setSelectedDate(null);
            setSelectedTime('');
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              companyName: '',
              revenue: '',
              termsAccepted: false
            });
            setGuestEmails([]);
            setNewGuestEmail('');
            setShowAddGuest(false);
            setShowSuccess(false);
            setShowError(false);
            setErrorMessage('');
            setMeetingResult(null);
          }}
          className="px-8 py-3 bg-[#A28750] text-white rounded-lg hover:bg-[#8a6f3f] transition-colors"
        >
          Schedule Another Meeting
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
      {currentStep === 4 && renderStep4()}
      {currentStep === 5 && renderStep5()}
    </div>
  );
};

export default MeetingScheduler;