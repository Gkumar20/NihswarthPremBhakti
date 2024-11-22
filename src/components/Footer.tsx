'use client'

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="container mx-auto my-8">
            <footer className="text-center text-lg-start text-white bg-gradient-to-r  from-purple-900 via-blue-500 to-indigo-500">
                {/* Logo Section */}
                <div className="text-center mb-4">

                </div>

                <div className="container p-4 pb-0">
                    {/* Section: Company Info */}
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="mx-auto mt-3">
                                <Image
                                    src="/logo.png" // Replace with your actual logo path
                                    alt="Nihswarth Prem Bhakti Logo"
                                    width={10}
                                    height={10}
                                    className="w-12 rounded-full mx-auto " // Adjust size as needed
                                />
                                <h6 className="text-uppercase mb-4 font-semibold">Nihswarth Prem Bhakti</h6>
                                <p>
                                    Welcome to Nihswarth Prem Bhakti, a platform dedicated to sharing meaningful content. We aim to promote various ads and showcase them on our channel.
                                </p>
                            </div>

                            {/* Section: Links */}
                            <div className="mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-semibold">Quick Links</h6>
                                <p><Link href="popularvideos" className="text-white">All Videos</Link></p>
                                <p><Link href="popular-videos" className="text-white">Popular Videos</Link></p>
                                <p><Link href="about" className="text-white">About Us</Link></p>
                                <p><Link href="contact" className="text-white">Contact Us</Link></p>
                                <p><Link href="promotion" className="text-white">Ads & Promotions</Link></p>
                            </div>

                            {/* Section: Contact Info */}
                            <div className="mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-semibold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> India</p>
                                <p><i className="fas fa-envelope mr-3"></i> learninganesh@gmail.com</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Copyright Section */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © {new Date().getFullYear()}
                    <Link href="https://www.youtube.com/@Nihswarth_prem" className="text-white">Nihswarth Prem Bhakti. All Rights Reserved.</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
