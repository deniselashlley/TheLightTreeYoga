import React, { useRef } from "react";
import PropTypes from 'prop-types';

import JoditEditor from 'jodit-react';
import './style.css';

const HtmlEditor = ({ value, onChange }) => {
  const editor = useRef(null);

  return (
    <div class="html-editor">
          <JoditEditor
            ref={editor}
            value={value || ""}
            tabIndex="-1"
            onBlur={(content) => {
              onChange(content);
            }}
            onChange={(content) => {
              onChange(content);
            }}
          />
    </div>
  );
}

HtmlEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,

};

HtmlEditor.defaultProps = {
  onChange: () => undefined,
  value: '',
};

export default HtmlEditor;