function formatArabicDate(date) {
  return new Date(date).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export { formatArabicDate as f };
