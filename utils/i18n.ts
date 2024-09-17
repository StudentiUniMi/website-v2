const loadMessages = async (locale?: string) => {
  return (await import(`../messages/${locale ?? "it"}.json`)).default;
};

export { loadMessages };
