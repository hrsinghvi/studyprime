import { Link } from 'react-router-dom'
import './LegalPage.css'

const LAST_UPDATED = 'April 8, 2026'

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-page__header">
          <span className="legal-page__label">Legal</span>
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__meta">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-page__body">
          <p>
            This Privacy Policy explains how Study Prime ("we," "us," or "our") collects, uses, and
            protects information when you use our website at studyprime.com (the "Site"). By using the
            Site, you agree to the practices described in this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect only the minimum information necessary to operate our Site:</p>
          <ul>
            <li><strong>Account information:</strong> When you create an account, we collect your name and email address.</li>
            <li><strong>Communications:</strong> If you contact us via email or our contact form, we retain that correspondence.</li>
            <li><strong>Usage data:</strong> Basic, anonymized information about how visitors interact with the Site (e.g., pages visited) may be collected through standard web analytics.</li>
          </ul>
          <p>
            We do <strong>not</strong> collect payment information through the Site. All payment
            arrangements are handled separately and directly between you and Study Prime outside of
            this platform.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect solely to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Respond to your inquiries and schedule consultations</li>
            <li>Send service-related communications (session reminders, updates)</li>
            <li>Improve the functionality of our Site</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2>3. Third-Party Services</h2>
          <p>Our Site integrates with the following third-party services, which have their own privacy policies:</p>
          <ul>
            <li><strong>Google (Sign-In / Authentication):</strong> If you sign in with Google, Google's Privacy Policy governs the data it processes.</li>
            <li><strong>Calendly:</strong> Our scheduling widget is provided by Calendly. When you book a consultation, Calendly's Privacy Policy applies to information you submit through their widget.</li>
          </ul>
          <p>We encourage you to review the privacy policies of any third-party services you interact with through our Site.</p>

          <h2>4. Children's Privacy</h2>
          <p>
            Our services are intended for students K–12. We do not knowingly collect personal
            information directly from children under the age of 13 without verifiable parental consent.
            Account registration must be completed by a parent or legal guardian on behalf of any
            minor under 13. If you believe we have inadvertently collected information from a child
            under 13 without consent, please contact us at{' '}
            <a href="mailto:help.studyprime@gmail.com">help.studyprime@gmail.com</a> and we will
            promptly delete it.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We take reasonable measures to protect the information stored on our platform. Account
            authentication is handled through Google's secure OAuth infrastructure. However, no method
            of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your California Privacy Rights (CCPA)</h2>
          <p>
            As a California resident, you have the right to request disclosure of the personal
            information we have collected about you, request deletion of that information, and opt out
            of any sale of personal information. We do not sell personal information. To exercise
            your rights, contact us at{' '}
            <a href="mailto:help.studyprime@gmail.com">help.studyprime@gmail.com</a>.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your account information for as long as your account is active or as needed to
            provide services. You may request deletion of your account and associated data at any time
            by emailing us.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the "Last
            updated" date at the top. Continued use of the Site after changes constitutes acceptance
            of the updated policy.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            <a href="mailto:help.studyprime@gmail.com">help.studyprime@gmail.com</a><br />
            4077 Lakemont Ct, San Jose, CA 95148
          </p>

          <div className="legal-page__disclaimer">
            <p>
              For our Terms of Service, including our disclaimer of guaranteed results and limitation
              of liability, please see our{' '}
              <Link to="/terms">Terms &amp; Conditions</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
