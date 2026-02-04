import { Linkedin, Mail, Phone } from 'lucide-react';

const WhatsappIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1v-1" />
    </svg>
);

const Footer = () => {
    return (
        <footer id="contact" className="bg-background border-t border-border/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="mb-8">
                    <span className="text-3xl font-bold text-primary" style={{ fontFamily: '"Orbitron", sans-serif' }}>HK</span>
                </div>

                <p className="text-2xl font-bold mb-8 text-center max-w-2xl">
                    Ready to take your thumbnails to the next level?
                </p>

                <div className="flex flex-col items-center gap-4 mb-8">
                    <a
                        href="mailto:hariieditz12@gmail.com"
                        className="text-primary text-xl font-medium hover:underline"
                    >
                        hariieditz12@gmail.com
                    </a>
                    <a
                        href="tel:6379475514"
                        className="text-foreground/80 text-lg hover:text-primary transition-colors"
                    >
                        +91 6379475514
                    </a>
                </div>

                <div className="flex gap-6 mb-8">
                    {[
                        {
                            icon: <WhatsappIcon className="w-6 h-6" />,
                            href: "https://wa.me/916379475514"
                        },
                        {
                            icon: <Phone className="w-6 h-6" />,
                            href: "tel:6379475514"
                        },
                        {
                            icon: <Linkedin className="w-6 h-6" />,
                            href: "https://www.linkedin.com/in/hari-krishna-s-58263b202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        },
                        {
                            icon: <Mail className="w-6 h-6" />,
                            href: "mailto:hariieditz12@gmail.com"
                        },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground/60 hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div className="text-foreground/40 text-sm">
                    © {new Date().getFullYear()} Harikrishna S. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
