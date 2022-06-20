import React from 'react';

const HtmlEditorPreview = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.value}} />
  );
}

export default HtmlEditorPreview;