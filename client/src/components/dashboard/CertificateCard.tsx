import { Download } from "lucide-react";
import { Certificate } from "@/lib/types";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
      <div className="border-b border-secondary-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-secondary-500">
            Issued on: {formatDate(certificate.issueDate)}
          </span>
          <span className={`px-2 py-1 text-xs font-medium ${certificate.status === 'Valid' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'} rounded-full`}>
            {certificate.status}
          </span>
        </div>
        <h3 className="font-semibold text-secondary-900">{certificate.title}</h3>
        <p className="text-sm text-secondary-600 mt-1">ID: {certificate.id}</p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary-200 rounded-full overflow-hidden mr-3 flex items-center justify-center">
              {certificate.issuer.logo ? (
                <img src={certificate.issuer.logo} alt={certificate.issuer.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-secondary-700 font-bold">{certificate.issuer.name.charAt(0)}</span>
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-secondary-900">Issued by</p>
              <p className="text-xs text-secondary-600">{certificate.issuer.name}</p>
            </div>
          </div>
          <button 
            className="text-primary-600 hover:text-primary-700"
            onClick={() => certificate.downloadHandler && certificate.downloadHandler()}
          >
            <Download size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
