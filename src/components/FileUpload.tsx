import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles : any) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://127.0.0.1:8000/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('File uploaded successfully', response.data);
    })
    .catch(error => {
      console.error('Error uploading file', error);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="mt-4 border-dashed border-2 rounded-sm p-[20px]" style={{ border: '2px dashed #007bff', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Search by Image</p>
    </div>
  );
};

export default FileUpload;
