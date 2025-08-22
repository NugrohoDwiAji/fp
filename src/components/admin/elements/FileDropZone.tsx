import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

interface FileDropzoneProps {
  onDrop: (file: File) => void;

}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onDrop}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setSelectedFile(file);
        onDrop(file);
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
    multiple: false,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition w-2xl m-auto ${
          isDragActive || selectedFile
            ? "bg-blue-100 border-cyan-400"
            : "bg-white border-gray-300"
        } `}
      >
        <input {...getInputProps()} />
        {selectedFile ? (
          <div className="mt-4 text-sm text-gray-700">
            <p>
              <strong>Nama:</strong> {selectedFile.name}
            </p>
            <p>
              <strong>Ukuran:</strong> {Math.round(selectedFile.size / 1024)} KB
            </p>
          </div>
        ): (
          <p className="text-gray-500">
            {isDragActive
              ? "Lepaskan file di sini..."
              : "Tarik dan lepas satu file (gambar, PDF, atau Word), atau klik untuk memilih"}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileDropzone;
