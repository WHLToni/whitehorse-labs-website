// Shared behaviour for the specialist page call-to-action buttons:
// every snapshot button scrolls to the enquiry form and preselects the
// "What do you need?" dropdown, the booking link scrolls to the booking option.

export const CONTACT_INTENT_EVENT = "specialist:contact-intent";
export const SNAPSHOT_OPTION = "Free website snapshot";

export function goToContact(event, { preset, booking } = {}) {
  event?.preventDefault();

  if (preset || booking) {
    window.dispatchEvent(
      new CustomEvent(CONTACT_INTENT_EVENT, { detail: { preset, booking } })
    );
  }

  const target = document.getElementById(booking ? "book-a-call" : "contact");
  target?.scrollIntoView({ behavior: "smooth" });
}