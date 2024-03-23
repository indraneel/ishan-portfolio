import MIME_TO_EXTENSION from "../utils/mimeTypeExtension";

function useAttachment(id: string, mimeType: string) {
  const extension = MIME_TO_EXTENSION[mimeType];
  return fetch(`/${id}.${extension}`);
}
export default useAttachment;
