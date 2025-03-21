import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { CornerDecoration } from '@/components/ui/CornerDecoration';
import { fadeInUp } from '@/animations';

export const DetailsSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Event Details Card */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-shadow duration-300 mb-12"
      >
        <CornerDecoration position="top-left" />
        <CornerDecoration position="top-right" />
        <CornerDecoration position="bottom-left" />
        <CornerDecoration position="bottom-right" />
        
        <div className="grid md:grid-cols-3 gap-6 text-slate-700">
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100"
          >
            <div className="bg-slate-100 p-3 rounded-full">
              <FaCalendarAlt className="text-2xl text-slate-600" />
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Thursday</h4>
              <p className="text-sm text-slate-600">May 1, 2025</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100"
          >
            <div className="bg-slate-100 p-3 rounded-full">
              <FaClock className="text-2xl text-slate-600" />
            </div>
            <div>
              <h4 className="font-medium text-slate-900">3:00 PM</h4>
              <p className="text-sm text-slate-600">onwards</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100"
          >
            <div className="bg-slate-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-2xl text-slate-600" />
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Muthirakkalil</h4>
              <p className="text-sm text-slate-600">Thikkodi</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Map Card */}
      <motion.div 
        variants={fadeInUp}
        className="bg-white p-8 rounded-lg shadow-md relative hover:shadow-lg transition-shadow duration-300"
      >
        <CornerDecoration position="top-left" />
        <CornerDecoration position="top-right" />
        <CornerDecoration position="bottom-left" />
        <CornerDecoration position="bottom-right" />
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-md mb-6 hover:shadow-lg transition-shadow duration-300"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1234567890123!2d75.6261368!3d11.4839858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6899686380cff%3A0x56e473c4785fbd8f!2sAnil%20MK%20home!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </motion.div>
        
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://www.google.com/maps/place/Anil+MK+home/@11.4839858,75.6247822,18z/data=!4m9!1m2!2m1!1sPlaur+template+thikkodi!3m5!1s0x3ba6899686380cff:0x56e473c4785fbd8f!8m2!3d11.4839858!4d75.6261368!16s%2Fg%2F11shc5v674?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg font-medium"
        >
          <FaMapMarkerAlt className="text-xl" />
          View on Google Maps
        </motion.a>
      </motion.div>
    </div>
  );
}; 