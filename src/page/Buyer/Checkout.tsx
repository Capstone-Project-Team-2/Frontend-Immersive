import { useState } from 'react'
import NavbarBuyer from '../../component/navbarBuyer'
import FootbarBuyer from '../../component/footbarBuyer'
import Modal from '../../component/modal'


const Checkout = () => {
    const [popupAtm, setPopupAtm] = useState<boolean>(false);
    const [popupInternet, setPopupInternet] = useState<boolean>(false);

    const handleAtm = () => {
        setPopupAtm(!popupAtm);
    };

    const handleInternet = () => {
        setPopupInternet(!popupInternet);
    };
    return (
        <section>
            <NavbarBuyer />
            <div className='shadow-md border-4 mt-32 mx-10'>
                <h1 className='font-extrabold font-[titan] my-5 text-8xl text-red-600 text-center'>23:59:59</h1>
                <h1 className='font-extrabold font-[titan] text-2xl text-center'>SEGERA SELESAIKAN PEMBAYARAN ANDA</h1>
                <div className='container flex flex-row  mt-10 mb-10 justify-center'>
                    <div className='flex text-justify flex-col text-lg font-semibold'>
                        <div>NAMA</div>
                        <div>EMAIL</div>
                        <div>NO HP</div>
                        <div>EVENT</div>
                        <div>TOTAL PEMBAYARAN</div>
                        <div>PAYMENT METHOD</div>
                        <div>VIRTUAL ACCOUNT</div>
                        <div>KODE PESANAN</div>
                    </div>
                    <div className='flex text-justify ml-10 text-lg font-semibold flex-col'>
                        <div>: Yusuf Ganteng</div>
                        <div>: yusufganteng@mail.com</div>
                        <div>: 08123456789</div>
                        <div>: Rock In Solo Festival</div>
                        <div>: Rp.251.000</div>
                        <div>: Bank BNI</div>
                        <div>: 56284748748</div>
                        <div>: uge7394r</div>
                    </div>
                </div>
                <div className='font-bold text-center my-10 text-xl'>INSTRUKSI
                    <div
                        onClick={handleInternet}
                        className='my-2'
                    >
                        INTERNET BANKING</div>
                    <div onClick={handleAtm}
                    >
                        ATM</div>
                </div>
            </div>
            <Modal isOpen={popupInternet} onClose={() => setPopupInternet(false)}>
                <div className="w-[30vw] h-[60vh] flex flex-col">
                    <div className="text-[24px] text-center font-semibold my-2"
                    onClick={handleInternet}>
                        Internet
                    </div>
                    <div className="mx-auto mt-5">
                       <div> 1.Login ke internet banking Bank BNI Anda</div>
                        <div>2.Pilih menu Transaksi lalu klik menu Virtual Account Billing</div>
                        3.Masukkan Nomor VA (9883033311254643) lalu pilih Rekening Debit
                        4.Detail transaksi akan ditampilkan, pastikan data sudah sesuai
                        5.Masukkan respon key BNI appli 2
                        6.Transaksi sukses, simpan bukti transaksi Anda
                    </div>
                </div>
            </Modal>
            <Modal isOpen={popupAtm} onClose={() => setPopupAtm(false)}>
                <div className="w-[30vw] h-[60vh] flex flex-col">
                    <div className="text-[24px] text-center font-semibold my-2"
                    onClick={handleAtm}>
                        ATM
                    </div>
                    <div className="mx-auto mt-5">
                        1.Masukkan kartu Anda
                        2.Pilih Bahasa
                        3.Masukkan PIN ATM Anda
                        4.Kemudian, pilih Menu Lainnya
                        5.Pilih Transfer dan pilih jenis rekening yang akan digunakan (Contoh: Dari rekening Tabungan)
                        6.Pilih Virtual Account Billing. Masukkan Nomor VA (9883033311254643)
                        7.Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi
                        8.Konfirmasi, apabila telah selesai, lanjutkan transaksi
                        9.Transaksi Anda telah selesai
                       
                    </div>
                </div>
            </Modal>
            <FootbarBuyer />
        </section>
    )
}

export default Checkout