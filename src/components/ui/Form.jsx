import React from 'react';

export default function Form() {
  return (
    <form>
      <textarea type="text" style={{ color: '#0000' }} />
      <button type="submit" className="btn">
        <span>Add</span>
      </button>
    </form>
  );
}
