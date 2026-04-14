import React, { useState } from 'react';
import { View } from '../types';

type HelpSection = 'overview' | 'dashboard' | 'log-conflict' | 'timeline' | 'messaging' | 'patterns' | 'documents' | 'counsel' | 'insights' | 'tokens' | 'faq';

interface HelpSectionItem {
    id: HelpSection;
    title: string;
    icon: string;
    content: React.ReactNode;
}

interface HelpPageProps {
    onNavigate?: (view: View) => void;
}

const HelpPage: React.FC<HelpPageProps> = ({ onNavigate }) => {
    const [activeSection, setActiveSection] = useState<HelpSection>('overview');
    const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

    const sections: HelpSectionItem[] = [
        {
            id: 'overview',
            title: 'Welcome & Overview',
            icon: '🏠',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Shouting Parents</strong> is a neutral co-parenting incident tracker powered by AI 
                        to help divorced or separated parents log, analyze, and resolve co-parenting conflicts 
                        through a Biblical peacemaking lens.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">📖 Our Mission</h4>
                        <p className="text-blue-800 text-sm leading-relaxed">
                            "Blessed are the peacemakers, for they shall be called sons of God." — Matthew 5:9
                            <br /><br />
                            We believe that co-parenting conflicts can be documented constructively, analyzed 
                            with wisdom, and resolved with grace. This app helps you keep court-ready records 
                            while guiding your heart toward peace and restoration.
                        </p>
                    </div>
                    <h4 className="font-semibold text-gray-900 mt-6">What You Can Do</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-0.5">✦</span>
                            <span><strong>Log conflicts</strong> — Document incidents with our structured form or AI-guided interview</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-0.5">✦</span>
                            <span><strong>View your timeline</strong> — See all your reports in chronological order</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-0.5">✦</span>
                            <span><strong>Analyze patterns</strong> — AI identifies recurring behavioral themes across your reports</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-0.5">✦</span>
                            <span><strong>Message your co-parent</strong> — Communicate with AI-powered "Peacekeeper" auto-replies</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-0.5">✦</span>
                            <span><strong>Build evidence packages</strong> — Compile court-ready documentation packages</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-0.5">✦</span>
                            <span><strong>Get biblical counsel</strong> — Receive scripture-based guidance for conflict resolution</span>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'dashboard',
            title: 'Dashboard (Sanctuary)',
            icon: '🏡',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        Your Dashboard — called the <strong>Sanctuary</strong> — is your home base. It gives you 
                        an at-a-glance view of your co-parenting journey.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-1">📊 Stats Cards</h4>
                            <p className="text-sm text-gray-600">See total logs, monthly incidents, communication conflicts, and recent activity (last 7 days). Trend indicators show if conflicts are increasing or decreasing.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-1">⚡ Quick Actions</h4>
                            <p className="text-sm text-gray-600">Jump straight into "Log a Conflict" or "View Restoration Log" with one tap.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-1">📋 Recent Logs</h4>
                            <p className="text-sm text-gray-600">Preview your 3 most recent incident reports. Use "Heart Inspection" for deep analysis or "Details" to see the full report.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-1">✨ Scripture</h4>
                            <p className="text-sm text-gray-600">A Bible verse appears every 7 minutes and after each report to encourage spiritual reflection.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'log-conflict',
            title: 'Log a Conflict',
            icon: '📝',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Log Conflict</strong> feature is the heart of the app. You can document 
                        co-parenting incidents in two ways:
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📋 Standard Form Mode</h4>
                            <p className="text-sm text-gray-600 mb-2">Fill in structured fields:</p>
                            <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                                <li><strong>Date & Time</strong> — When did the incident occur?</li>
                                <li><strong>Category</strong> — Choose from 8 categories (Communication Issue, Scheduling Conflict, Financial Dispute, Missed Visitation, Parental Alienation Concern, Child Wellbeing, Legal Documentation, Other)</li>
                                <li><strong>People Involved</strong> — Who was part of this incident?</li>
                                <li><strong>Description</strong> — What happened? Stick to facts.</li>
                                <li><strong>Impact</strong> — How did this affect the children?</li>
                                <li><strong>Evidence</strong> — Attach screenshots, photos, or PDFs</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🤖 AI Interview Mode</h4>
                            <p className="text-sm text-gray-600">
                                Have a conversation with our AI assistant. It gently guides you through the incident 
                                using Biblical peacemaking principles, asking questions one at a time. When finished, 
                                the AI converts your conversation into a neutral, court-ready "Restoration Report."
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">✨ Refine & Save with AI</h4>
                            <p className="text-sm text-gray-600">
                                After writing your notes, click <strong>"Refine & Save with AI"</strong>. The AI 
                                reformats your raw notes into a neutral, factual "Restoration Report" with Biblical 
                                alignment. This costs <strong>1 token</strong>. You can also use <strong>"Manual Save"</strong> 
                                as a free fallback.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📑 Incident Templates</h4>
                            <p className="text-sm text-gray-600">
                                Save frequently-used report formats as templates. Great for recurring incident types 
                                — just pick a template and fill in the specifics.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'timeline',
            title: 'Restoration Log (Timeline)',
            icon: '📚',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Restoration Log</strong> shows all your incident reports in reverse-chronological 
                        order — your complete record of co-parenting challenges.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🔍 Filter by Category</h4>
                            <p className="text-sm text-gray-600">Narrow the timeline to see only specific types of incidents — like "Communication Issue" or "Missed Visitation."</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">☑️ Multi-Select</h4>
                            <p className="text-sm text-gray-600">Select multiple reports to batch-select them. This is especially useful when building an <strong>Evidence Package</strong> — a floating "Build Evidence Package" button appears when reports are selected.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">💬 Discuss Incident (Plus/Pro)</h4>
                            <p className="text-sm text-gray-600">Jump into the Biblical Counsel assistant with a specific incident as context. The AI will help you understand and respond to the situation.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🔬 Heart Inspection</h4>
                            <p className="text-sm text-gray-600">Run a deep behavioral analysis on any single incident. The AI examines it against the backdrop of all your reports, identifying patterns and Biblical alignment.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'messaging',
            title: 'Secure Messaging',
            icon: '💬',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Secure Messaging</strong> system lets you communicate directly with your 
                        co-parent through the app, with optional AI mediation to keep conversations peaceful.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🧵 Threaded Discussions</h4>
                            <p className="text-sm text-gray-600">Organize conversations by subject (e.g., "Summer Vacation Schedule," "Medical Expenses"). Each thread keeps related messages together.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🕊️ Peacekeeper AI Auto-Reply</h4>
                            <p className="text-sm text-gray-600">
                                Enable the <strong>"Peacekeeper"</strong> toggle per thread. When your co-parent sends 
                                a message, AI automatically drafts a gracious, BIFF-style (Brief, Informative, Friendly, Firm) 
                                reply on your behalf. You can edit before sending.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🔬 Analyze Hostility</h4>
                            <p className="text-sm text-gray-600">
                                Run a forensic analysis on recent messages. The AI detects gaslighting, narcissism, 
                                wrath, and hostility patterns — generating a report you can save as an incident. 
                                Costs <strong>5 tokens</strong>.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🔗 Account Linking</h4>
                            <p className="text-sm text-gray-600">Both parents need accounts. Link accounts via your co-parent's username in your profile settings to enable direct messaging between you.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'patterns',
            title: 'Spirit Check (Patterns)',
            icon: '📊',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Spirit Check</strong> uses AI to identify recurring behavioral themes across all 
                        your incident reports, giving you a bird's-eye view of your co-parenting challenges.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🎯 Theme Detection</h4>
                            <p className="text-sm text-gray-600">AI identifies 3–5 recurring themes across your reports — for example, "Recurring anger about pickup times" or "Financial withholding pattern."</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📈 Frequency Charting</h4>
                            <p className="text-sm text-gray-600">Visual bar charts show how often each theme appears, making it easy to spot the most pressing issues.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📖 Biblical Lens</h4>
                            <p className="text-sm text-gray-600">Each pattern is analyzed against Biblical family order principles, providing spiritual context for understanding the behavior.</p>
                        </div>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                        <p className="text-sm text-amber-800">💡 <strong>Token cost:</strong> Pattern analysis requires AI tokens.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'documents',
            title: 'Document Library',
            icon: '📁',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Document Library</strong> is your centralized repository for all legal documents, 
                        evidence, and reports.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📂 Five Folders</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li><strong>Drafted Motions</strong> — AI-generated legal motions</li>
                                <li><strong>Forensic Analyses</strong> — Deep analysis reports</li>
                                <li><strong>Evidence Packages</strong> — Compiled court-ready packages</li>
                                <li><strong>User Uploads</strong> — Files you've uploaded (PDFs, images, etc.)</li>
                                <li><strong>Risk Assessments</strong> — Bond & attachment reports</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📤 File Upload</h4>
                            <p className="text-sm text-gray-600">Upload images, PDFs, and text documents. They're automatically saved to your chosen folder.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🤖 AI Analyze & Redraft</h4>
                            <p className="text-sm text-gray-600">Select a document and ask the AI to analyze it for legal relevance or restructure it into a formal legal format.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'counsel',
            title: 'Biblical Counsel (Legal Assistant)',
            icon: '⚖️',
            content: (
                <div className="space-y-4">
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
                        <p className="text-sm text-purple-800">🔒 <strong>Requires Plus or Pro tier.</strong> This feature is not available on the Free plan.</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Biblical Counsel</strong> assistant is an AI-powered legal and spiritual advisor 
                        trained on Indiana family law and scripture.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">💬 AI Legal Chat</h4>
                            <p className="text-sm text-gray-600">Ask questions about your situation. The AI has access to all your incident reports and documents as context, grounding responses in current Indiana family law.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📄 Document Generation</h4>
                            <p className="text-sm text-gray-600">Request structured legal documents — motions, declarations, and more. The AI generates formatted documents saved to your Document Library.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🔗 Context Modes</h4>
                            <p className="text-sm text-gray-600">You can start a session with a specific incident report as context, or with a forensic analysis as the primary background for the AI's advice.</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                        <p className="text-sm text-blue-800">💡 Each AI response costs <strong>1 token</strong>. Document generation costs vary.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'insights',
            title: 'Heart Inspection (Deep Analysis)',
            icon: '🔬',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Heart Inspection</strong> provides a deep forensic and behavioral analysis of a 
                        single incident, cross-referenced against all your other reports.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🎯 Single Incident Deep Dive</h4>
                            <p className="text-sm text-gray-600">The AI performs a comprehensive analysis of one incident — examining behavior patterns, Biblical alignment, and potential legal implications.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🌐 Google Search Grounding</h4>
                            <p className="text-sm text-gray-600">The AI uses web search to find relevant legal and behavioral context, with source attribution shown for transparency.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📝 Motion Drafting (Plus/Pro)</h4>
                            <p className="text-sm text-gray-600">From the analysis, you can directly generate legal motions — the AI drafts a structured motion based on the deep analysis findings.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'tokens',
            title: 'Subscriptions & Tokens',
            icon: '💎',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        The app uses a <strong>token system</strong> to manage AI feature usage. Your available 
                        tokens depend on your subscription tier.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-3">
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                            <h4 className="font-bold text-lg text-gray-900">Free</h4>
                            <p className="text-2xl font-bold text-blue-600 my-2">50</p>
                            <p className="text-sm text-gray-600">tokens</p>
                            <p className="text-xs text-gray-500 mt-2">Basic logging, patterns, messaging</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
                            <h4 className="font-bold text-lg text-blue-900">Plus</h4>
                            <p className="text-2xl font-bold text-blue-600 my-2">150</p>
                            <p className="text-sm text-gray-600">tokens</p>
                            <p className="text-xs text-gray-500 mt-2">+ Biblical Counsel, Incident Discussion</p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200 text-center">
                            <h4 className="font-bold text-lg text-purple-900">Pro</h4>
                            <p className="text-2xl font-bold text-blue-600 my-2">550</p>
                            <p className="text-sm text-gray-600">tokens</p>
                            <p className="text-xs text-gray-500 mt-2">+ Motion Drafting, all AI features</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Token Costs</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• AI Chat response — <strong>1 token</strong></li>
                            <li>• AI Report Refinement — <strong>1 token</strong></li>
                            <li>• AI Report Generation (from chat) — <strong>5 tokens</strong></li>
                            <li>• Hostility Analysis — <strong>5 tokens</strong></li>
                            <li>• Deep Messaging Analysis — <strong>variable</strong></li>
                            <li>• Evidence Package Generation — <strong>variable</strong></li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            icon: '❓',
            content: (
                <div className="space-y-2">
                    {[
                        {
                            q: "How do I get started?",
                            a: "After creating your account, set up your profile with your name, role (Mother/Father), children's names, and court information. Then use 'Log a Conflict' to document your first incident."
                        },
                        {
                            q: "Is my data stored locally?",
                            a: "No. All your data is stored securely on the server-side backend. There is no local storage — you must log in every time you open the app for security."
                        },
                        {
                            q: "Can I use this app offline?",
                            a: "Yes! The app works offline as a Progressive Web App (PWA). Your changes will sync automatically when you reconnect to the internet."
                        },
                        {
                            q: "How do I message my co-parent?",
                            a: "Both parents need to create accounts. Go to your Profile and enter your co-parent's username to link accounts. Once linked, you can message each other through the Secure Messaging tab."
                        },
                        {
                            q: "What does the AI Peacekeeper do?",
                            a: "When enabled, the Peacekeeper AI automatically drafts gracious, BIFF-style replies to your co-parent's messages. You can review and edit before sending. It helps de-escalate conflicts."
                        },
                        {
                            q: "What is a 'Restoration Report'?",
                            a: "It's a neutral, court-ready incident report generated from your input (or AI conversation). The AI strips away emotional language and leaves factual, Biblically-grounded documentation."
                        },
                        {
                            q: "How do I build an Evidence Package?",
                            a: "Go to the Restoration Log (Timeline), select multiple incidents using the checkboxes, then click the 'Build Evidence Package' button that appears. The AI compiles everything into a court-ready document."
                        },
                        {
                            q: "What happens when I run out of tokens?",
                            a: "You'll be prompted to upgrade your subscription tier. You can still use basic features like logging incidents and viewing your timeline without tokens."
                        },
                        {
                            q: "Can I export my data?",
                            a: "Yes. You can generate PDF exports of individual reports, evidence packages, and legal documents through the Document Library."
                        },
                        {
                            q: "What is the Custody Challenge feature?",
                            a: "If one parent has less than 35% custody time, this feature uses Attachment Theory and Biblical principles (Exodus 20:12) to challenge the imbalance and can generate a 'Bond Protection Report.'"
                        },
                    ].map((faq, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === faq.q ? null : faq.q)}
                                className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900 text-sm pr-4">{faq.q}</span>
                                <span className="text-gray-400 text-lg flex-shrink-0">
                                    {expandedFaq === faq.q ? '−' : '+'}
                                </span>
                            </button>
                            {expandedFaq === faq.q && (
                                <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ),
        },
    ];

    const activeSectionData = sections.find(s => s.id === activeSection);

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Help & Guide</h1>
                <p className="text-gray-600 mt-1">Learn how Shouting Parents works and get the most out of every feature.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Navigation */}
                <div className="lg:w-64 flex-shrink-0">
                    <nav className="bg-white rounded-xl border border-gray-200 p-2 lg:sticky lg:top-20">
                        <div className="space-y-0.5">
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2.5 ${
                                        activeSection === section.id
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    <span className="text-base">{section.icon}</span>
                                    <span className="truncate">{section.title}</span>
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl">{activeSectionData?.icon}</span>
                            <h2 className="text-xl font-bold text-gray-900">{activeSectionData?.title}</h2>
                        </div>
                        {activeSectionData?.content}
                    </div>

                    {/* Quick Navigation Footer */}
                    <div className="mt-6 flex items-center justify-between">
                        <button
                            onClick={() => {
                                const currentIndex = sections.findIndex(s => s.id === activeSection);
                                if (currentIndex > 0) setActiveSection(sections[currentIndex - 1].id);
                            }}
                            disabled={activeSection === sections[0].id}
                            className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            ← Previous
                        </button>
                        <button
                            onClick={() => {
                                const currentIndex = sections.findIndex(s => s.id === activeSection);
                                if (currentIndex < sections.length - 1) setActiveSection(sections[currentIndex + 1].id);
                            }}
                            disabled={activeSection === sections[sections.length - 1].id}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
