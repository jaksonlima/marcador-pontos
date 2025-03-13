import { Radio, RadioGroup } from "@heroui/radio";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export function RadioApp() {
  const [selected, setSelected] = React.useState("london");

  return (
    <div className="flex flex-col gap-3">
      <RadioGroup
        label="Select your favorite city"
        value={selected}
        onValueChange={setSelected}
      >
        <Radio value="buenos-aires">Buenos Aires</Radio>
        <Radio value="sydney">Sydney</Radio>
        <Radio value="san-francisco">San Francisco</Radio>
        <Radio value="london">London</Radio>
        <Radio value="tokyo">Tokyo</Radio>
      </RadioGroup>
      <p className="text-default-500 text-small">Selected: {selected}</p>

      <MyRadioGroup
        defaultChecked="argentina"
        onValueChange={(e) => console.log({ e })}
      >
        <MyRadio value="argentina">Argentina</MyRadio>
        <MyRadio value="brasil">Brasil</MyRadio>
        <MyRadio value="colombia">Colombia</MyRadio>
      </MyRadioGroup>
    </div>
  );
}

const MyRadioContext = createContext<{
  defaultChecked?: string;
  onValueChange?: (value: string) => void;
}>({});

interface MyRadioGroup extends PropsWithChildren {
  defaultChecked?: string;
  onValueChange?: (value: string) => void;
}

function MyRadioGroup({
  defaultChecked,
  onValueChange,
  children,
}: MyRadioGroup) {
  return (
    <MyRadioContext.Provider value={{ defaultChecked, onValueChange }}>
      <div>{children}</div>
    </MyRadioContext.Provider>
  );
}

interface MyRadioProps extends PropsWithChildren {
  value: string;
  name?: string;
}

function MyRadio({ children, ...rest }: MyRadioProps) {
  const [checked, setChecked] = useState(false);
  const { onValueChange, defaultChecked } = useContext(MyRadioContext);

  useEffect(() => {
    if (!defaultChecked) return;

    if (defaultChecked === rest.value) {
      setChecked(!checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultChecked]);

  return (
    <label>
      <input
        name="radio-260225:2134"
        {...rest}
        type="radio"
        defaultChecked={checked}
        onChange={(e) => {
          onValueChange?.(e.target.value);
        }}
      />
      {children}
    </label>
  );
}
