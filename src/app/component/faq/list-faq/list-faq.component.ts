import { Component } from '@angular/core';
import { faq } from '../../models/faq';

@Component({
  selector: 'app-list-faq',
  templateUrl: './list-faq.component.html',
})
export class ListFaqComponent {
  faqs: faq[] = [
    { question: "How do I book a hotel using the booking system?", answer: "To book a hotel, you can visit our website or mobile app and follow the simple steps provided." },
    { question: "What information do I need to provide when booking a hotel?", answer: "You will need to provide your desired check-in and check-out dates, the number of guests, and any specific room preferences you may have." },
    { question: "Can I modify or cancel my hotel booking?", answer: "Yes, you can modify or cancel your hotel booking. Please refer to our booking policy for more information on the cancellation and modification process." },
    { question: "What payment methods are accepted for hotel bookings?", answer: "We accept various payment methods, including credit cards, debit cards, and online payment platforms. The available options will be displayed during the booking process." },
    { question: "Is my credit card information secure when booking a hotel?", answer: "Yes, we prioritize the security of your personal and financial information. Our booking system utilizes encryption technology to protect your credit card details." },
    { question: "Can I make a hotel reservation without a credit card?", answer: "In most cases, a credit card is required to secure your hotel reservation. However, alternative payment options may be available depending on the hotel and booking conditions." },
    { question: "Do I receive a confirmation for my hotel booking?", answer: "Yes, once your hotel booking is confirmed, you will receive a confirmation email or notification with all the details of your reservation." },
    { question: "What should I do if I encounter issues with my hotel booking?", answer: "If you encounter any issues with your hotel booking, please contact our customer support team. They will assist you in resolving any problems or concerns." },
    { question: "Are there any additional fees or taxes associated with hotel bookings?", answer: "Additional fees and taxes may apply to hotel bookings, such as resort fees or local taxes. These details will be provided during the booking process and included in the final price." },
    { question: "Can I request specific amenities or special requirements for my hotel room?", answer: "Yes, you can request specific amenities or special requirements for your hotel room, such as a non-smoking room, extra beds, or accessibility features. Please mention your preferences during the booking process." }
  ]
}
