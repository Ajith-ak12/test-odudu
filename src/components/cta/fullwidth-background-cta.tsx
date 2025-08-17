"use client";

import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const FullwidthBackgroundCta = () => {
  return (
    <section className="bg-neutral-50 !w-full">
      <div className="flex items-center justify-center bg-[url('/hero/background.jpg?')] bg-cover !w-full !h-[505px]">
        <div className="container">
          <div className="text-neutral-800 flex flex-col gap-8 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-medium font-display">
              <Users className="h-8 w-8" />
              Unity
            </div>
            <h2 className="text-5xl font-bold font-display">
              Join the Movement Building Africa's Digital Future
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-neutral-600">
              Whether you're a government entity, private sector leader, investor, or diaspora member, there's a role for you in this transformation.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" variant="default">
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline">

                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export { FullwidthBackgroundCta };