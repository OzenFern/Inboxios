export function mapTask(page) {
  const due = page.properties.Due;
  return {
    id: page.id,
    title: page.properties.Name.title[0].text.content,
    status: page.properties.Status.status.name,
    due_date: due.date?.end ?? due.date.start ?? null, // Use end date if available, otherwise fallback to start date then null
  };
}
