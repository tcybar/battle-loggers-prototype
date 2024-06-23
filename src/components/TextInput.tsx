import { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        aria-label="text-input"
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};

export default TextInput;
