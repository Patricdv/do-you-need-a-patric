import { useEffect, useState } from 'react';

export default function Footer() {
  const [keyProgress, setKeyProgress] = useState(0);
  const [toasty, setToasty] = useState(false);

  const commandSequence = [
    'arrowup',
    'arrowup',
    'arrowdown',
    'arrowdown',
    'arrowleft',
    'arrowright',
    'arrowleft',
    'arrowright',
    'b',
    'a',
  ];

  let key = 0;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    const keyCode = e.key;

    if (commandSequence[key] === keyCode.toLowerCase()) {
      e.preventDefault();
      key += 1;
      if (key >= commandSequence.length) {
        setToasty(true);
        window.removeEventListener('keydown', handleKeyDown);
      }

      setKeyProgress(key);
      return;
    }

    key = 0;
    setKeyProgress(0);
  };

  return (
    <footer>
      <p>
        Type in order to get some fun:
        <span className="code-progress">
          <span className={keyProgress > 0 ? 'blue' : ''}>&#9650;</span>
          <span className={keyProgress > 1 ? 'blue' : ''}>&#9650;</span>
          <span className={keyProgress > 2 ? 'blue' : ''}>&#9660;</span>
          <span className={keyProgress > 3 ? 'blue' : ''}>&#9660;</span>
          <span className={keyProgress > 4 ? 'blue' : ''}>&#9668;</span>
          <span className={keyProgress > 5 ? 'blue' : ''}>&#9658;</span>
          <span className={keyProgress > 6 ? 'blue' : ''}>&#9668;</span>
          <span className={keyProgress > 7 ? 'blue' : ''}>&#9658;</span>
          <span className={keyProgress > 8 ? 'blue' : ''}>B</span>
          <span className={keyProgress > 9 ? 'blue' : ''}>A</span>
        </span>
      </p>

      <div className={`toasty ${toasty ? 'active' : ''}`}>
        <div className="speech-bubble">TOASTY!</div>

        <img
          src={require('../../pages/images/toasty.png')}
          className="patric-toasty"
          alt="Me saying toasty! like in Mortal Kombat"
        />
      </div>
    </footer>
  );
}
