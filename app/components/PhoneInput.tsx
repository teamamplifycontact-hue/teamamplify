export default function PhoneInput() {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[14px] font-bold">
        電話番号
        {/* <span className="text-red-500">*</span> */}
      </label>

      <div className="flex items-center gap-4">
        <input className="w-[140px] h-[50px] rounded-[18px] border border-[#BDBDBD] px-4" />
        <span>-</span>
        <input className="w-[140px] h-[50px] rounded-[18px] border border-[#BDBDBD] px-4" />
        <span>-</span>
        <input className="w-[140px] h-[50px] rounded-[18px] border border-[#BDBDBD] px-4" />
      </div>
    </div>
  );
}