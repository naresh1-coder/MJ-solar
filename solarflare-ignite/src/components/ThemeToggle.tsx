
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-solar-red',
        'transition-colors duration-300',
        theme === 'dark' ? 'bg-accent' : 'bg-accent',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-solar-light transition-transform hover:rotate-45 duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-solar-dark transition-transform hover:scale-110 duration-300" />
      )}
    </button>
  );
}
