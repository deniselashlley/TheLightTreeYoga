import React from 'react';

const RichTextWidgetPreview = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.value}} />
  );
}

export default RichTextWidgetPreview;