import { useState } from 'react';

type DaysOfWeek = {
  [key: string]: boolean;
};

const useWeeklyTimeSelector = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [selectedDays, setSelectedDays] = useState<DaysOfWeek>(() => {
    return days.reduce((acc, day) => {
      acc[day] = false;
      return acc;
    }, {} as DaysOfWeek);
  });

  const handleSelectAll = () => {
    const newSelectedDays = days.reduce((acc, day) => {
      acc[day] = true;
      return acc;
    }, {} as DaysOfWeek);
    setSelectedDays(newSelectedDays);
  };

  const handleClearAll = () => {
    const newSelectedDays = days.reduce((acc, day) => {
      acc[day] = false;
      return acc;
    }, {} as DaysOfWeek);
    setSelectedDays(newSelectedDays);
  };

  const handleToggleDay = (day: string, isOpen: boolean) => {
    setSelectedDays((prev) => ({
      ...prev,
      [day]: isOpen,
    }));
  };

  return {
    days,
    selectedDays,
    handleSelectAll,
    handleClearAll,
    handleToggleDay
  };
};

export default useWeeklyTimeSelector;
