import { cn } from "@/lib/utils";
import Select from "./select";
import { Theme, useTheme } from "./theme-provider";

interface AppearanceSettingsFormProps {
  className?: string;
}

export default function AppearanceSettingsForm({
  className
}: AppearanceSettingsFormProps) {
  const { theme, setTheme } = useTheme();

  const handleSelectTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <div
      className={cn(
        className,
        "outline-primary/20 space-y-3 rounded-sm p-7 outline-2"
      )}>
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
        Select Theme
      </h3>

      <Select
        id="theme"
        label="Select Theme"
        value={theme}
        onChange={handleSelectTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Select>
    </div>
  );
}
