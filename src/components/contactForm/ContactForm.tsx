import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Form from './components/Form';
import ErrorMessage from './components/ErrorMessage';
import ProcessingMessage from './components/ProcessingMessage';
import SuccessMessage from './components/SuccessMessage';
import { smoothScrollTo } from '@/utils/utils';
import { FormType } from '@/types/formType';
import { ContactInfo } from '@/types/contact';

type Status = 'start' | 'processing' | 'ok' | 'error';

interface Props {
  type: FormType;
  scrollToId: string;
}

const ContactForm = ({ type, scrollToId }: Props): JSX.Element => {
  const [status, setStatus] = useState<Status>('start');
  const [statusMessage, setStatusMessage] = useState('');

  const onRestart = async () => {
    smoothScrollTo(scrollToId, 0);
    setStatus('start');
  };

  const onSubmit = async (values: ContactInfo, clearForm: () => void) => {
    smoothScrollTo(scrollToId, 0);
    setStatus('processing');
    let res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    try {
      if (res.ok) {
        clearForm();
        setStatus('ok');
      } else {
        setStatus('error');
      }
      let json = await res.json();
      if (json && json.message) {
        setStatusMessage(json.message);
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage(err.toString());
    }
  };

  return (
    <>
      <Box sx={{ display: status === 'start' ? 'block' : 'none' }}>
        <Form type={type} onSubmit={onSubmit} />
      </Box>
      {status === 'processing' ? (
        <ProcessingMessage />
      ) : status === 'error' ? (
        <ErrorMessage message={statusMessage} onRetry={onRestart} />
      ) : status === 'ok' ? (
        <SuccessMessage type={type} onDone={onRestart} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ContactForm;
