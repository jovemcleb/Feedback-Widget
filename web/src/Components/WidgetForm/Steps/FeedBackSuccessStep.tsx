import CloseButton from '../../CloseButton/CloseButton';

interface FeedBackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
};

export default function FeedBackSuccessStep({ onFeedbackRestartRequested }: FeedBackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.5 32C36.5 34.209 34.709 36 32.5 36H4.5C2.291 36 0.5 34.209 0.5 32V4C0.5 1.791 2.291 0 4.5 0H32.5C34.709 0 36.5 1.791 36.5 4V32Z" fill="#77B255" />
          <path d="M30.0701 6.40291C28.9141 5.65191 27.3661 5.98091 26.6121 7.13891L15.7261 23.9179L10.6971 19.2679C9.68306 18.3299 8.10107 18.3929 7.16407 19.4059C6.22707 20.4199 6.28907 22.0019 7.30307 22.9389L14.5121 29.6049C14.9921 30.0499 15.6021 30.2699 16.2081 30.2699C16.8811 30.2699 17.7421 29.9879 18.3071 29.1309C18.6391 28.6249 30.8071 9.86091 30.8071 9.86091C31.5581 8.70191 31.2281 7.15391 30.0701 6.40291Z" fill="white" />
        </svg>

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
          onClick={onFeedbackRestartRequested}
        >
          Quero enviar outro feedback
        </button>
      </div>
    </>
  );
}
