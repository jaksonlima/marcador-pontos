import { useEffect, useRef, useState } from "react";

type Points = {
  isFocused: boolean;
  setIsFocused: (is: boolean) => void;
};

export function Points({ isFocused, setIsFocused }: Points) {
  const [value, setValue] = useState(90);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.select();
    }

    if (!isFocused) {
      console.log("saida", { isFocused });
    }
  }, [isFocused]);

  return (
    <div className="relative inline-block">
      <span
        className={`text-2xl font-bold cursor-pointer ${
          isFocused && "text-green-500"
        }`}
        onClick={handleClick}
      >
        {value}
      </span>

      <input
        ref={inputRef}
        type="text"
        className="absolute inset-0 opacity-0"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
