import React, { useEffect, useRef } from 'react';
import * as LR from '@uploadcare/blocks';
import { useRouter } from 'next/navigation';

LR.registerBlocks(LR);

interface UploadCareButtonProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onUpload: (file: File) => any;
}

const UploadCareButton = (props: UploadCareButtonProps) => {
  const router = useRouter();
  const { onUpload } = props;
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleUpload = async (e: any) => {
      const file = await onUpload(e?.detail?.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
    ctxProviderRef?.current?.addEventListener(
      'file-upload-success',
      handleUpload
    );
  }, [ctxProviderRef, onUpload, router]);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="a9428ff5ff90ae7a64eb" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
