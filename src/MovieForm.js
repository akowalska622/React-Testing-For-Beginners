import React, {useState} from 'react';

export default function MovieForm({ submitForm }) {
  const [text, setText] = useState('');

  return (
    <div>
      <form data-testid='movie-form' onSubmit={() => submitForm(text)}>
        <input type='text' onChange={(e) => setText(e)}/>
        <button>Submit</button>
      </form>
    </div>
  );
}
