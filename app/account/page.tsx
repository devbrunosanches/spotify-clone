import Header from "@/components/Header";

import AccountContent from "./components/AccountContent";

const Account = () => {
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full 
            overflow-hidden overflow-y-auto"
        >
            <Header className="gradient from-red-900">
                <div className="flex flex-col gap-y-6 mb-2">
                    <h1 className="text-white text-3xl font-semibold">
                        Account Settings
                    </h1>
                </div>
            </Header>
            <AccountContent />
        </div>
    )
}

export default Account;