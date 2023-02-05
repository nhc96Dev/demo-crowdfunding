import axios from "axios";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import ErrorComponent from "components/common/ErrorComponent";
Quill.register("modules/imageUploader", ImageUploader);

const QuillEditor = ({ content, setContent }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        "italic",
        "bold",
        "underline",
        "strike",
        "link",
        "image",
        "align",
        { align: "center" },
        { align: "right" },
        { align: "justify" },
        { list: "bullet" },
      ],

      // imageUploader: {
      //   upload: async (file) => {
      //     const bodyFormData = new FormData();
      //     console.log("upload: ~ bodyFormData", bodyFormData);
      //     bodyFormData.append("image", file);
      //     const response = await axios({
      //       method: "post",
      //       url: "https://api.imgbb.com/1/upload?key=7d0f23f1346679297a19b3eaf36d3f87",
      //       data: bodyFormData,
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     });
      //     return response.data.data.url;
      //   },
      // },
    }),
    []
  );
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={content}
      onChange={setContent}
      placeholder="Write your story......"
    />
  );
};
QuillEditor.propTypes = {
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
};

export default withErrorBoundary(QuillEditor, {
  FallbackComponent: ErrorComponent,
});
