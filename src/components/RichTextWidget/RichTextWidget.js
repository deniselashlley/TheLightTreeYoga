import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class RichTextWidget extends Component {
  config = {
    apiKey:process.env.GATSBY_TINYMCE_API,
    format: {
      plugins: [
        "advlist",
        "autolink",
        "lists",
        "link",
        "image",
        "charmap",
        "preview",
        "anchor",
        "searchreplace",
        "fullscreen",
        "media",
        "table",
        "image",
      ],
      toolbar: 'bold italic underline | h1 h2 h3 | forecolor | blockquote image link | alignleft aligncenter alignright alignjustify |bullist numlist outdent indent| undo redo ',
    }
  };

  handleOnChange = (content) => {
    const { onChange } = this.props;
    onChange(content);
  };

  render() {
    const { value } = this.props;
    const { apiKey, format } = this.config;

    return (
      <Editor
        init={format}
        apiKey={apiKey}
        value={value || ""}
        onEditorChange={this.handleOnChange}
      />
    );
  }
}

export default RichTextWidget;
