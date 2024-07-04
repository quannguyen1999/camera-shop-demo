import { MapPin,Mail,Phone, ChevronDown } from "lucide-react";

const SideBarHeader = () => {
    return <div className="h-14 w-full px-12 bg-green-700 text-white grid grid-cols-2">
        <div className="flex flex-row gap-5 text-sm">
            <div className=" cursor-pointer flex flex-row text-center justify-center items-center">
                <p>Phụ kiện chụp ảnh</p>
                <div>
                <ChevronDown />
                </div>
            </div>
            <div className="cursor-pointer flex flex-row text-center justify-center items-center">
                <p>Đồ trang trí</p>
                <div>
                <ChevronDown />
                </div>
            </div>
            <div className="cursor-pointer flex flex-row text-center justify-center items-center">
                Blog
                <div>
                <ChevronDown />
                </div>
            </div>
            <div className="cursor-pointer flex flex-row text-center justify-center items-center">
                Feedback
                <div>
                <ChevronDown />
                </div>
            </div>
        </div>

        <div className="flex flex-row text-xs gap-5  ">
            <div className="flex flex-row items-center justify-center gap-1">
                <div>
                    <MapPin size={15}/>
                </div>
                <p>
                SỐ 22 NGUYỄN ĐÌNH HOÀN- NGHĨA ĐÔ - CẦU GIẤY - HÀ NỘI
                </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
                <div>
                    <Mail size={15}/>
                </div>
                <div>
                    <p>CONTACT</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
                <div>
                    <Phone size={15}/>
                </div>
                <div>
                    <p>PHONE</p>
                </div>
            </div>

        </div>
    </div>
}

export default SideBarHeader;