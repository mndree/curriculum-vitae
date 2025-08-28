import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface ModalOptions {
  title?: string;
  subtitle?: React.ReactNode;
  size?: ModalSize;
  dismissible?: boolean;
  closeText?: string;
}

interface OpenModalParams {
  content: React.ReactNode;
  options?: ModalOptions;
}

interface ModalContextValue {
  openModal: (params: OpenModalParams) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [options, setOptions] = useState<ModalOptions | undefined>(undefined);

  const openModal = useCallback(({ content, options }: OpenModalParams) => {
    setContent(content);
    setOptions(options);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent(null);
    setOptions(undefined);
  }, []);

  const value = useMemo(() => ({ openModal, closeModal, isOpen }), [openModal, closeModal, isOpen]);

  const sizeClass = useMemo(() => {
    switch (options?.size) {
      case 'sm':
        return 'max-w-md';
      case 'lg':
        return 'max-w-3xl';
      case 'xl':
        return 'max-w-5xl';
      case 'md':
      default:
        return 'max-w-2xl';
    }
  }, [options?.size]);

  return (
    <ModalContext.Provider value={value}>
      {children}

      {isOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"
            onClick={options?.dismissible === false ? undefined : closeModal}
          ></div>
          <div className={`relative z-10 bg-black/95 border border-white/20 rounded-2xl shadow-2xl shadow-red-500/20 w-full ${sizeClass} max-h-[90vh] overflow-y-auto`}> 
            <div className="p-6 border-b border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {options?.title && (
                    <h2 className="text-2xl font-extrabold text-white">{options.title}</h2>
                  )}
                  {options?.subtitle && (
                    <div className="mt-1">{options.subtitle}</div>
                  )}
                </div>
                {options?.dismissible !== false && (
                  <button
                    onClick={closeModal}
                    className="text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                    aria-label="Close modal"
                  >
                    <i className="fa-solid fa-times text-xl"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="p-6">
              {content}
            </div>
            <div className="p-6 border-t border-white/10 flex justify-end">
              {options?.dismissible !== false && (
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {options?.closeText ?? 'Close'}
                </button>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextValue => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return ctx;
};


