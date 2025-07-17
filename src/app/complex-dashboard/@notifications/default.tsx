import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
    return (
    <Card>
        <div>These are default notifications</div>
        <div>
            <Link href="/complex-dashboard/archived"> Archived </Link>
        </div>
    </Card> );
}