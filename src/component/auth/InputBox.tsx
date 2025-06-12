'use client';

type TextInputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
};

export default function InputBox({
  type = 'text',
  ...rest
}: TextInputProps) {
  return (
    <div className="w-full">
      <input
        type={type}
        {...rest}
        className="w-full px-4 py-2 text-yellow font-medium rounded-md border border-ye shadow-sm focus:outline-none focus:ring-1 transition duration-200"
      />
    </div>
  );
}
