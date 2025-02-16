import React, { useState, useEffect } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/Select';
import { Loader2 } from "lucide-react";

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface MultiSelectProps {
  options: () => Promise<Option[]>;
  placeholder?: string;
  isLoading?: boolean;
  onChange: (selected: string[]) => void;
  defaultSelected?: string[];
  disabledOptions?: string[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = "Select items...",
  isLoading = false,
  onChange,
  defaultSelected = [],
  disabledOptions = [],
}) => {
  const [items, setItems] = useState<Option[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    setLoading(true);
    options()
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          disabled: disabledOptions.includes(item.value),
        }));
        setItems(updatedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [options, disabledOptions]);

  useEffect(() => {
    // Ensure Storybook updates selected options in real-time
    setSelected(defaultSelected);
  }, [defaultSelected]);

  useEffect(() => {
    // Remove disabled options from selected options
    const filteredSelected = selected.filter((value) => !disabledOptions.includes(value));
    if (filteredSelected.length !== selected.length) {
      setSelected(filteredSelected);
      onChange(filteredSelected);
    }
  }, [disabledOptions, selected, onChange]);

  useEffect(() => {
    // Re-add enabled options to selected options
    const reEnabledSelected = defaultSelected.filter((value) => !disabledOptions.includes(value));
    if (reEnabledSelected.length !== selected.length) {
      setSelected(reEnabledSelected);
      onChange(reEnabledSelected);
    }
  }, [disabledOptions, defaultSelected, onChange]);

  const handleSelect = (value: string) => {
    setSelected((prev) => {
      const newSelected = prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
      onChange(newSelected);
      return newSelected;
    });
  };

  return (
    <div className="relative w-full">
      <Select onValueChange={handleSelect} value={selected.join(", ")}>
        <SelectTrigger className="w-full">
          <SelectValue>
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : selected.length > 0 ? (
              selected.map((val) => items.find((item) => item.value === val)?.label).join(", ")
            ) : (
              placeholder
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {items.map((option) => (
            <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MultiSelect;