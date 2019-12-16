import { omit } from 'lodash'
import { Decode } from '../../../decorators'
import { Operation } from '../../operation'
import { ReportResponse, ReportId } from '../report-response'
import { SponsoredProductsCampaignReportParams } from './sp-campaign-report-params'

type SponsoredProductsReportParams = SponsoredProductsCampaignReportParams

export class SponsoredProductsReportOperation<
  ReportParams extends SponsoredProductsReportParams
> extends Operation {
  private type = 'sp'

  @Decode(ReportResponse)
  public requestReport(params: ReportParams) {
    return this.client.post<ReportResponse>(
      `${this.version}/${this.type}/${params.recordType}/report`,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )
  }

  @Decode(ReportResponse)
  public getReport(reportId: ReportId) {
    return this.client.get<ReportResponse>(`${this.version}/reports/${reportId}`)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public async downloadReport<T extends string>(
    reportId: ReportId,
  ): Promise<Partial<Record<T, 'number' | 'string'>>[]> {
    return this.client.download(`${this.version}/reports/${reportId}/download`)
  }
}