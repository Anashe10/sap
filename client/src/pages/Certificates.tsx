import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import CertificateList from "@/components/certificates/CertificateList";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Download, FileCheck } from "lucide-react";

export default function Certificates() {
  const { certificates, coursesCompleted } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Certificates</h1>
        <p className="text-secondary-600">
          View and download your earned certificates and achievements.
        </p>
      </div>

      {/* Certificate Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="rounded-full p-2 bg-primary-100 mr-4">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-secondary-500">Total Certificates</p>
                <p className="text-2xl font-semibold">{certificates.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="rounded-full p-2 bg-success/10 mr-4">
                <FileCheck className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-secondary-500">Completed Courses</p>
                <p className="text-2xl font-semibold">{coursesCompleted}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="rounded-full p-2 bg-secondary-100 mr-4">
                <Download className="h-6 w-6 text-secondary-600" />
              </div>
              <div>
                <p className="text-sm text-secondary-500">Downloads Available</p>
                <p className="text-2xl font-semibold">{certificates.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certificate Guide */}
      <div className="mb-8 bg-secondary-50 p-6 rounded-lg border border-secondary-200">
        <h2 className="text-lg font-medium text-secondary-900 mb-3">
          Certificate Information
        </h2>
        <div className="text-sm text-secondary-700 space-y-2">
          <p>
            • Certificates are awarded upon successful completion of courses and
            learning paths.
          </p>
          <p>
            • All certificates can be downloaded as PDF files for your records or
            shared on professional networks.
          </p>
          <p>
            • Certificates include a unique ID that can be verified by potential
            employers.
          </p>
          <p>
            • Some certificates may have an expiration date, after which they
            need to be renewed.
          </p>
        </div>
      </div>

      {/* Certificate List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-secondary-900 mb-6">
          Your Certificates
        </h2>
        {certificates.length > 0 ? (
          <CertificateList certificates={certificates} />
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-secondary-200">
            <Award className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-secondary-900 mb-2">
              No certificates yet
            </h3>
            <p className="text-secondary-600 mb-4">
              Complete courses to earn certificates and track your achievements.
            </p>
            <a
              href="/catalog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Browse courses to get started
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
