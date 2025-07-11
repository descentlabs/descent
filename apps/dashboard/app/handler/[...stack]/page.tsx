import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";
import { notFound } from "next/navigation";

export default function Handler(props: any) {
    const { params } = props;
    const path = params?.stack?.[0];

    // I'm not allowing other users to sign up at the moment.
    // When it's released to production and for everyone, it will be available.
    if (path === 'sign-up' || path === 'signup') {
        notFound();
    }

    return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
