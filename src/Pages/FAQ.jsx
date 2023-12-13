import React from "react";

const FAQ = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <dl>
        <div className="faq-item">
          <dt>Q1: What is the purpose of this expense tracker app?</dt>
          <dd>
            A1: The expense tracker app helps you keep track of your personal,
            living, and emergency expenses. It provides a convenient way to
            monitor your spending, categorize expenses, and maintain a budget.
          </dd>
        </div>

        <div className="faq-item">
          <dt>Q2: How do I add an expense in the app?</dt>
          <dd>
            A2: To add an expense, navigate to the "Add Expense" section and
            enter the necessary details such as the amount, category, and
            description. Click the "Save" button to record the expense.
          </dd>
        </div>

        <div className="faq-item">
          <dt>Q3: Can I categorize my expenses?</dt>
          <dd>
            A3: Yes, you can categorize your expenses based on your needs. The
            app provides predefined categories for personal, living, and
            emergency expenses, but you can also create custom categories.
          </dd>
        </div>

        <div className="faq-item">
          <dt>Q4: How do I view my spending history?</dt>
          <dd>
            A4: The app's "History" section displays a detailed record of your
            expenses. You can filter by date, category, or type of expense to
            get a comprehensive view of your spending over time.
          </dd>
        </div>

        <div className="faq-item">
          <dt>Q5: Is there a budgeting feature in the app?</dt>
          <dd>
            A5: Yes, the app includes a budgeting feature. Set monthly or weekly
            budgets for each expense category to help you stay on track. The app
            will notify you if you exceed your budget for a specific category.
          </dd>
        </div>

        <div className="faq-item">
          <dt>Q6: How can I secure my data in the app?</dt>
          <dd>
            A6: The app prioritizes security. Your data is encrypted and stored
            securely. Make sure to use a strong password and enable two-factor
            authentication for an additional layer of protection.
          </dd>
        </div>

        <div className="faq-item">
          <dt>Q7: What should I do in case of a financial emergency?</dt>
          <dd>
            A7: In case of a financial emergency, the app has a dedicated
            "Emergency Cases" section. You can quickly access this section to
            view emergency-related expenses and allocate funds accordingly.
          </dd>
        </div>

        <div className="faq-item">
          <dt>Q8: Can I use the app on multiple devices?</dt>
          <dd>
            A8: Yes, the app supports multiple devices. Simply log in with your
            account credentials, and your expense data will be synced across all
            your devices.
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default FAQ;
