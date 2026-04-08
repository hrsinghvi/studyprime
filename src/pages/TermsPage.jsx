import { Link } from 'react-router-dom'
import './LegalPage.css'

const LAST_UPDATED = 'April 8, 2026'

export default function TermsPage() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-page__header">
          <span className="legal-page__label">Legal</span>
          <h1 className="legal-page__title">Terms &amp; Conditions</h1>
          <p className="legal-page__meta">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-page__body">
          <p>
            Please read these Terms &amp; Conditions ("Terms") carefully before using the Study Prime
            website or engaging our tutoring services. By accessing our Site or using our services,
            you agree to be bound by these Terms. If you do not agree, do not use our Site or services.
          </p>

          <h2>1. Services</h2>
          <p>
            Study Prime provides private tutoring and academic preparation services including, but not
            limited to, SAT prep, ACT prep, and K–12 subject tutoring. All services are provided on
            an as-is, best-efforts basis. Specific tutors, session formats, or service availability
            are subject to change without notice.
          </p>

          <h2>2. No Guarantee of Results</h2>
          <p>
            <strong>
              Study Prime makes no representations, warranties, or guarantees of any kind — express
              or implied — regarding academic outcomes, test score improvements, college admissions
              results, grades, or any other measurable outcome.
            </strong>
          </p>
          <p>
            Educational outcomes depend on many factors outside of our control, including but not
            limited to the student's effort, attendance, prior knowledge, test-taking conditions,
            learning differences, and external circumstances. Any testimonials, case studies, or
            results described on this Site represent individual experiences and are not typical or
            guaranteed for all students.
          </p>
          <p>
            By engaging Study Prime's services, you acknowledge and accept that results are not
            guaranteed and that Study Prime shall bear no liability for any failure to achieve a
            desired academic or testing outcome.
          </p>

          <h2>3. Payment</h2>
          <p>
            Payment for tutoring services is handled directly between you and Study Prime outside of
            this website. No payment information is collected or processed through the Site.
            Specific pricing, payment schedules, and refund terms will be communicated to you
            separately before services begin. All fees are due as agreed upon in your individual
            arrangement with Study Prime.
          </p>

          <h2>4. Cancellation and Rescheduling</h2>
          <p>
            Sessions must be cancelled or rescheduled with reasonable advance notice. Failure to
            provide adequate notice may result in forfeiture of the session fee. Specific
            cancellation policies will be communicated at the time of booking.
          </p>

          <h2>5. Parental Consent for Minors</h2>
          <p>
            Our services are designed for students K–12. If you are under the age of 18, a parent or
            legal guardian must review and agree to these Terms on your behalf. By creating an account
            or scheduling services for a minor, the parent or guardian represents that they have the
            authority to do so and agree to these Terms. Study Prime is not responsible for any
            unauthorized use of the Site or services by minors.
          </p>

          <h2>6. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and
            for all activity that occurs under your account. You agree to provide accurate and current
            information when registering and to notify us immediately of any unauthorized account use
            at <a href="mailto:help.studyprime@gmail.com">help.studyprime@gmail.com</a>.
          </p>

          <h2>7. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Interfere with or disrupt the Site's operation</li>
            <li>Misrepresent your identity or affiliation</li>
            <li>Use the Site to transmit harmful, offensive, or fraudulent content</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, and design — is the property
            of Study Prime and protected by applicable intellectual property laws. You may not
            reproduce, distribute, or create derivative works from any Site content without our
            express written permission.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            The Site and all services are provided <strong>"as is"</strong> and{' '}
            <strong>"as available"</strong> without warranty of any kind, either express or implied,
            including but not limited to implied warranties of merchantability, fitness for a
            particular purpose, or non-infringement. We do not warrant that the Site will be
            uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Study Prime and its tutors, employees,
            and agents shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages — including but not limited to loss of academic opportunity, loss of
            admission to any institution, or emotional distress — arising out of or related to your
            use of our services or this Site, even if advised of the possibility of such damages.
          </p>
          <p>
            In no event shall Study Prime's total liability to you for any claim arising from these
            Terms or your use of services exceed the total amount paid by you to Study Prime in the
            three (3) months preceding the claim.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Study Prime, its tutors, and affiliates from
            any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising
            out of your use of the Site or services, your violation of these Terms, or your violation
            of any rights of another party.
          </p>

          <h2>12. Third-Party Links and Services</h2>
          <p>
            Our Site may contain links to third-party websites or embed third-party services (such as
            Calendly for scheduling). Study Prime is not responsible for the content, privacy
            practices, or terms of any third-party service. Use of third-party services is at your
            own risk.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State
            of California, without regard to its conflict of law provisions. Any disputes arising
            under these Terms shall be subject to the exclusive jurisdiction of the courts located in
            Santa Clara County, California.
          </p>

          <h2>14. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. When we do, we will revise the
            "Last updated" date. Your continued use of the Site or services after any changes
            constitutes acceptance of the updated Terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at:<br />
            <a href="mailto:help.studyprime@gmail.com">help.studyprime@gmail.com</a><br />
            4077 Lakemont Ct, San Jose, CA 95148
          </p>

          <div className="legal-page__disclaimer">
            <p>
              For information on how we handle your personal data, see our{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
