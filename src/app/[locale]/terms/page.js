// pages/terms.js or components/TermsAndConditions.js
import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from "@/components/common/PageHeader";

const TermsAndConditions = () => {
  return (
    <>
      <PageHeader currentPage={"Terms and Conditions"} banner={"banner-1 banner-2"} />
      <Container className="py-5">
        <h1 className="mb-4">Terms and Conditions</h1>

        <p>These Terms and Conditions ("Terms") govern your use of the website operated by <strong>LTD Teatro</strong> and your participation in events, ticket purchases, and reservations. By using our website or attending our events, you agree to these Terms.</p>

        <h3>1. Company Information</h3>
        <ul>
          <li><strong>Name:</strong> LTD Teatro</li>
          <li><strong>ID:</strong> 445788416</li>
          <li><strong>Address:</strong> Lech and Maria Kachinsky Street 5b, Batumi, Georgia</li>
          <li><strong>Website:</strong> <a href="https://teatro.ge" target="_blank" rel="noopener noreferrer">https://teatro.ge</a></li>
          <li><strong>Email:</strong> contact@teatro.ge, manager@teatro.ge</li>
          <li><strong>Phone:</strong> +995 598 25 44 44</li>
        </ul>

        <h3>2. Eligibility</h3>
        <p>You must be at least 21 years old to enter the venue or purchase tickets. We reserve the right to request a valid ID at the entrance.</p>

        <h3>3. Ticket Purchases</h3>
        <ul>
          <li>All ticket purchases are final and non-refundable unless the event is cancelled.</li>
          <li>In case of cancellation, the full ticket amount will be refunded to the original payment method.</li>
          <li>We are not responsible for tickets purchased through unauthorized third parties.</li>
        </ul>

        <h3>4. Reservations</h3>
        <p>Table reservations are held for a limited time. If you do not arrive by the reserved time, your reservation may be cancelled without refund.</p>

        <h3>5. Event Rules</h3>
        <ul>
          <li>We reserve the right to refuse entry to intoxicated or inappropriate guests.</li>
          <li>Smoking may be allowed in designated areas depending on the event setup.</li>
          <li>No illegal substances or weapons are permitted inside the venue.</li>
          <li>Guests may be subject to bag checks for safety purposes.</li>
        </ul>

        <h3>6. Intellectual Property</h3>
        <p>All content on our website, including logos, photos, and text, is owned or licensed by LTD Teatro. You may not copy, reproduce, or distribute it without permission.</p>

        <h3>7. Website Use</h3>
        <p>By using our website, you agree not to engage in any activity that may disrupt or harm our services, servers, or users.</p>

        <h3>8. Privacy</h3>
        <p>Your data is handled according to our <a href="/privacy">Privacy Policy</a>. By using our website, you consent to the data practices described there.</p>

        <h3>9. Changes to Terms</h3>
        <p>We may update these Terms from time to time. Updates will be posted on this page with a revised effective date. Continued use of the site means you accept the new Terms.</p>
      </Container>
    </>
  );
};

export default TermsAndConditions;
