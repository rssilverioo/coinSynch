import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import Image from "next/image";
import { CryptoCoin } from '@/services/cryptocoin';
import styles from './styles.module.scss';
import { formatNumber } from '@/utils/moneyFormat';
import { Button } from '../../atoms/Button';
import { CurrencyChange } from '@/components/atoms/CurrencyChange';

interface Props {
  blockchains: CryptoCoin[];
}

export function CryptoTable(props: Props) {
  const table = useReactTable({
    data: props.blockchains,
    columns: [
      {
				header: "#",
				cell: (change) => <span>{change.row.index >= 9 ? '' : 0 }{change.row.index +1}</span>,
			},
      {
        header: 'Crypto',
        cell: (change) => {
					const row = change.row.original;
					const parsedCoinName = row.name.toLowerCase().replace(" ", "-");
					return (
						<span className={styles.coin_name_symbol}>
							<Image
								src={`https://cryptologos.cc/logos/${parsedCoinName}-${row.symbol.toLowerCase()}-logo.svg`}
								width={32}
								height={32}
								alt={row.name}
							/>
							<div>
								<span>{row.name}</span>
								<span>{row.symbol}</span>
							</div>
						</span>
					);
				},
      },
      {
        header: 'Price',
        accessorFn: (row) => formatNumber(Number(row.priceUsd), true),
      },
      {
        header: 'Change',
        cell: (change) => (
					<CurrencyChange
						value={Number(change.row.original.changePercent24Hr)}
						percent
					/>
				),
      },
      {
        header: 'Trade',
        cell: (row) => (
          <Button className={styles.btn} type="button" design="primary">
            Buy
          </Button>
        )
      }
    ],
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table className={styles.tableTrue}>
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>


  );
}
