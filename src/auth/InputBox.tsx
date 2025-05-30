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
        className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      />
    </div>
  );
}
