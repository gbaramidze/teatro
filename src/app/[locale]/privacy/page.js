import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from "@/components/common/PageHeader";
const PrivacyPage = () => {
    return (
      <>
        <PageHeader currentPage={"Privacy Policy"} banner={"banner-1 banner-2"} />
        <Container className="py-5">
          <h1 className="mb-4">Privacy Policy</h1>
          <p><strong>Effective Date:</strong> 19.06.2025</p>
          <p><strong>Last Updated:</strong> 19.06.2025</p>

          <p>Welcome to <strong>LTD Teatro</strong>. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <h3>1. Who We Are</h3>
          <ul>
            <li><strong>Company Name:</strong> LTD Teatro</li>
            <li><strong>Company ID:</strong> 445788416</li>
            <li><strong>Address:</strong> Lech and Maria Kachinsky Street 5b, Batumi, Georgia</li>
            <li><strong>Website:</strong> <a href="https://teatro.ge" target="_blank" rel="noopener noreferrer">https://teatro.ge</a></li>
            <li><strong>Emails:</strong> contact@teatro.ge, manager@teatro.ge</li>
            <li><strong>Phone:</strong> +995 598 25 44 44</li>
          </ul>

          <h3>2. What Information We Collect</h3>
          <p><strong>Personal Information:</strong> name, email, phone number, birthdate, payment info, preferences.</p>
          <p><strong>Technical Info:</strong> IP address, browser, device, visited pages, date/time.</p>

          <h3>3. How We Use Your Information</h3>
          <ul>
            <li>To process ticket bookings and reservations</li>
            <li>To send notifications</li>
            <li>To verify age eligibility</li>
            <li>To improve the website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h3>4. Legal Basis for Processing</h3>
          <ul>
            <li>Consent</li>
            <li>Contractual necessity</li>
            <li>Legal compliance</li>
            <li>Legitimate interest</li>
          </ul>

          <h3>5. Sharing Your Information</h3>
          <p>We do not sell your data. We may share it with payment providers, marketing services, or legal authorities as needed.</p>

          <h3>6. Cookies and Tracking</h3>
          <p>We use cookies to personalize your experience. You may disable cookies in your browser settings.</p>

          <h3>7. Data Security</h3>
          <p>We apply reasonable security measures, but no method of transmission is 100% secure.</p>

          <h3>8. Your Rights</h3>
          <p>You may request access, correction, deletion, or restriction of your data at any time. Email us at <a href="mailto:contact@teatro.ge">contact@teatro.ge</a>.</p>

          <h3>9. Age Restrictions</h3>
          <p>Our services are for users 18 years or older. We do not knowingly collect data from minors.</p>

          <h3>10. Changes to This Policy</h3>
          <p>We may update this Privacy Policy. Please check back periodically for changes.</p>

          <h3>11. Contact Us</h3>
          <p>
            LTD Teatro<br />
            Lech and Maria Kachinsky Street 5b<br />
            Batumi, Georgia<br />
            Email: <a href="mailto:contact@teatro.ge">contact@teatro.ge</a>, <a href="mailto:manager@teatro.ge">manager@teatro.ge</a><br />
            Phone: +995 598 25 44 44
          </p>
        </Container>
      </>
    );

}
export default PrivacyPage