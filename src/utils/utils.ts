export const smoothScrollTo = (id: string, offset: number): void => {
  setTimeout(() => {
    const element: HTMLElement = document.querySelector(`#${id}`);
    if (!element) {
      return;
    }

    window.scrollTo({
      left: 0,
      top: element.offsetTop - offset,
      behavior: 'smooth',
    });
  });
};
