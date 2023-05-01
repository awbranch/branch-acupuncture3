export const smoothScrollTo = (id: string, offset: number): void => {
  setTimeout(() => {
    const element = document.getElementById(id);
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
