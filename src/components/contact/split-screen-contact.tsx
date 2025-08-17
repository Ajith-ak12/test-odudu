"use client";

import { Users, Handshake, Code, Globe, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

function SplitScreenContact() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          width={1920}
          height={1080}
          alt="Africa side"
          src="/hero/africa_side.png"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." // example, use your own
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl font-[var(--font-display)]">
              Join Us in Building the Future of Africa
            </h2>
            <p className="mt-2 text-lg/8 text-neutral-600 font-[var(--font-body)]">
              Odudu-DAO is more than a platform; it is a movement. We are seeking partners, investors, and collaborators who share our vision.
            </p>

            {/* Partnership Opportunity Categories */}
            <div className="mt-12 mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6 font-[var(--font-display)]">Partnership Opportunities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-neutral-100 rounded-lg">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-800 font-[var(--font-display)] !text-3xl">Government Partnership</h4>
                    <p className="text-sm text-neutral-600 font-[var(--font-body)]">Collaborate on policy and regulation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-neutral-100 rounded-lg">
                  <Handshake className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-800 font-[var(--font-display)] !text-3xl">Investment Opportunity</h4>
                    <p className="text-sm text-neutral-600 font-[var(--font-body)]">Fund Africa's digital transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-neutral-100 rounded-lg">
                  <Code className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-800 font-[var(--font-display)] !text-3xl">Technical Collaboration</h4>
                    <p className="text-sm text-neutral-600 font-[var(--font-body)]">Build cutting-edge solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-neutral-100 rounded-lg">
                  <Globe className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-800 font-[var(--font-display)] !text-3xl">Diaspora Engagement</h4>
                    <p className="text-sm text-neutral-600 font-[var(--font-body)]">Connect with African communities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6 font-[var(--font-display)]">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 font-[var(--font-display)]">Email</h4>
                    <p className="text-neutral-600 font-[var(--font-body)]">contact@odudu-dao.org</p>
                    <p className="text-neutral-600 font-[var(--font-body)]">partnerships@odudu-dao.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 font-[var(--font-display)]">Phone</h4>
                    <p className="text-neutral-600 font-[var(--font-body)]">+234 802 123 4567</p>
                    <p className="text-sm text-neutral-500 font-[var(--font-body)]">Monday - Friday, 9:00 AM - 6:00 PM WAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 font-[var(--font-display)]">Address</h4>
                    <p className="text-neutral-600 font-[var(--font-body)]">
                      Victoria Island Technology Hub<br />
                      Plot 1234, Tiamiyu Savage Street<br />
                      Victoria Island, Lagos 101241<br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

export { SplitScreenContact };